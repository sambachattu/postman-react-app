from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Verify Sidebar Delete Button
    page.get_by_role("button", name="New Request").click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/sidebar_delete.png")

    # Verify Headers Remove Button
    page.get_by_role("button", name="+ Add Header").click()
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/screenshots/header_remove.png")

    # Verify Response Action Buttons (Send Request to get a response)
    # The URL needs to be populated first.
    page.locator('.url-input').fill('https://jsonplaceholder.typicode.com/todos/1')
    page.wait_for_timeout(500)
    page.get_by_role("button", name="Send").click()
    page.wait_for_timeout(1500)
    page.screenshot(path="/home/jules/verification/screenshots/response_actions.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
