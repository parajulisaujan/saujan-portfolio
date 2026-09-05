import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { site } from "../data/site";
import { projects } from "../data/projects";

test("content, public files, and metadata are correct", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(site.title);
  for (const id of [
    "about",
    "projects",
    "experience",
    "skills",
    "education",
    "involvement",
    "contact",
  ])
    await expect(page.locator(`#${id}`)).toBeVisible();
  await expect(page.locator(".project-card")).toHaveCount(5);
  await expect(page.locator("#skills")).toContainText("C · C++ · Java (Basic)");
  for (const project of projects) {
    const card = page
      .locator(".project-card")
      .filter({
        has: page.getByRole("heading", { name: project.name, exact: true }),
      });
    await expect(
      card.getByRole("link", { name: `View ${project.name} code on GitHub` }),
    ).toHaveAttribute("href", project.code);
  }
  const liveDemo = page.getByRole("link", {
    name: "Open Job Market Intelligence Dashboard live demo",
  });
  await expect(liveDemo).toBeVisible();
  await expect(liveDemo).toHaveAttribute(
    "href",
    "https://job-market-intelligence-sp.streamlit.app/",
  );
  await expect(liveDemo).toHaveAttribute("target", "_blank");
  await expect(liveDemo).toHaveAttribute("rel", "noopener noreferrer");
  const intro = page.locator(".intro");
  for (const name of ["View Projects", "Resume", "GitHub", "LinkedIn"])
    await expect(intro.getByRole("link", { name, exact: true })).toBeVisible();
  expect(site.email).toBe("parajulisaujan1718@gmail.com");
  expect(site.linkedin).toBe(
    "https://www.linkedin.com/in/saujan-parajuli-410584432/",
  );
  for (const link of await page.locator('a[href*="linkedin.com"]').all())
    await expect(link).toHaveAttribute("href", site.linkedin!);
  await expect(page.locator("#projects")).toContainText(
    "3-person Senior Design team",
  );
  await expect(page.locator("#projects")).toContainText(
    "Uses fictional demo job-posting data.",
  );
  await expect(page.locator("#projects")).toContainText(
    "48 completed courses and 145 credits",
  );
  await expect(page.locator("body")).not.toContainText(
    /\bGPA\b|3\.595|Scout|Backend Lead|AI Lead|secure authentication/i,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    site.url,
  );
  await expect(page.locator(".email-link")).toHaveAttribute(
    "href",
    `mailto:${site.email}`,
  );
  await expect(
    page.getByRole("link", { name: "Saujan on LinkedIn" }),
  ).toHaveAttribute("href", site.linkedin!);
  const pdf = await request.get(site.resume);
  expect(pdf.status()).toBe(200);
  expect((await pdf.body()).subarray(0, 4).toString()).toBe("%PDF");
  const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const loadingTask = getDocument({
    data: new Uint8Array(await pdf.body()),
    useSystemFonts: true,
  });
  const document = await loadingTask.promise;
  expect(document.numPages).toBe(1);
  const pdfPage = await document.getPage(1);
  const pdfContent = await pdfPage.getTextContent();
  const pdfText = pdfContent.items
    .map((item) => ("str" in item ? item.str : ""))
    .join(" ");
  expect(pdfText).toContain(site.email);
  expect(pdfText).toContain("C, C++, Java (Basic)");
  expect(pdfText).toContain("3-person Senior Design team");
  expect(pdfText).toContain("fictional demo job-posting data");
  expect(pdfText).not.toMatch(
    /parajulisaujan@gmail\.com|\bGPA\b|3\.595|Backend Lead|AI Lead|Scout/,
  );
  const annotations = await pdfPage.getAnnotations();
  const urls = annotations
    .filter((item) => item.subtype === "Link")
    .map((item) => item.url);
  expect(urls).toContain(site.linkedin);
  expect(urls).toContain(`mailto:${site.email}`);
  expect(urls).toContain("https://job-market-intelligence-sp.streamlit.app/");
  await loadingTask.destroy();
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(`${site.url}/sitemap.xml`);
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain(site.url);
  for (const path of ["/icon.svg", "/opengraph-image"])
    expect((await request.get(path)).status()).toBe(200);
  await page.goto("/resume");
  await expect(page.locator("body")).toContainText(site.email);
  await expect(page.locator("body")).toContainText("Java (Basic)");
  await expect(page.locator("body")).not.toContainText(/\bGPA\b|3\.595|Scout/i);
  expect(errors).toEqual([]);
});

test("responsive layouts have no overflow and pass accessibility checks", async ({
  page,
}) => {
  for (const width of [375, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator("h1")).toBeVisible();
    const introBounds = await page.locator(".intro").boundingBox();
    expect(introBounds!.y + introBounds!.height).toBeLessThan(900);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations, `Accessibility at ${width}px`).toEqual([]);
    await page.screenshot({
      path: `.qa/portfolio-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `.qa/intro-${width}.png` });
  }
});

test("mobile menu, keyboard access, and theme persistence", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("navigation")).toBeVisible();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page.getByRole("navigation")).toBeHidden();
  await expect(page).toHaveURL(/#projects$/);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.goto("/");
  await page.locator("body").click({ position: { x: 1, y: 1 } });
  await page.screenshot({
    path: ".qa/portfolio-dark-mobile.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({
    path: ".qa/portfolio-dark-desktop.png",
    fullPage: true,
  });
});

test("system theme still works when storage is unavailable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage unavailable");
      },
    });
  });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
