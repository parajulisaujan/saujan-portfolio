import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage();
  const response = await page.goto(
    `${process.env.SITE_URL || "http://localhost:3000"}/resume`,
    {
      waitUntil: "networkidle",
    },
  );
  if (!response?.ok())
    throw new Error("Resume page did not load successfully.");
  await page.locator(".resume-page h1").waitFor();
  const expectedEmail = await page
    .locator('.resume-contact a[href^="mailto:"]')
    .textContent();
  await page.emulateMedia({ media: "print", colorScheme: "light" });
  await mkdir("public/resume", { recursive: true });
  const pdf = await page.pdf({
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
  });
  const loadingTask = getDocument({
    data: new Uint8Array(pdf),
    useSystemFonts: true,
  });
  const document = await loadingTask.promise;
  if (document.numPages !== 1)
    throw new Error(`Resume must fit one page; got ${document.numPages}.`);
  const firstPage = await document.getPage(1);
  const content = await firstPage.getTextContent();
  const text = content.items
    .map((item) => ("str" in item ? item.str : ""))
    .join(" ");
  if (!expectedEmail || !text.includes(expectedEmail))
    throw new Error("PDF contact information does not match the resume page.");
  await loadingTask.destroy();
  await writeFile("public/resume/Saujan-Parajuli-Resume.pdf", pdf);
  console.log("Created public/resume/Saujan-Parajuli-Resume.pdf");
} finally {
  await browser.close();
}
