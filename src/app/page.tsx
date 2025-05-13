import Image from "next/image";

const items = [
    {id: 1, name: "Selenium WebDriver", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"},
    {id: 2, name: "Playwright", img: "https://playwright.dev/img/playwright-logo.svg"},
    {id: 3, name: "Appium", img: "https://appium.io/docs/en/latest/assets/images/appium-logo.png"},
    {id: 4, name: "Protractor", img: "https://www.protractortest.org/img/favicon.ico"},
    {id: 5, name: "Cypress", img: "https://www.cypress.io/favicon.ico"},
    {id: 6, name: "Puppeteer", img: "https://pptr.dev/img/favicon.ico"},
    {
        id: 7,
        name: "Test Complete",
        img: "https://deitry.gallerycdn.vsassets.io/extensions/deitry/vscode-testcomplete/0.0.7/1646822796147/Microsoft.VisualStudio.Services.Icons.Default"
    },
    {id: 8, name: "SpecFlow", img: "https://gasparnagy.com/wp-content/uploads/2019/04/specflow-icon-new.png"},
    {id: 9, name: "Cucumber", img: "https://cucumber.io/img/logo.svg"},
    {id: 10, name: "Cucumber Studio", img: "https://cucumber.io/img/logo.svg"},
    {
        id: 11,
        name: "Jira",
        img: "https://images.icon-icons.com/3053/PNG/512/jira_cloud_macos_bigsur_icon_190051.png"
    },
    {id: 12, name: "Xray", img: "https://docs.getxray.app/download/attachments/27536922/Logo-Xray.png?version=2&modificationDate=1540404968127&api=v2"},
    {id: 13, name: "Jenkins", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"},
    {id: 14, name: "GitHub", img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},

    {id: 15, name: "MS Azure", img: "https://bravocg.com/wp-content/uploads/2022/06/logo-microsoft-cloud-azure-png-480x270.webp"},
];

export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-blue-400 to-blue-700">
            <header className="flex items-center justify-center mb-12 max-w-[850px] w-full">
                <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={120}
                    height={120}
                    className="mr-4"
                />
                <div>
                    <h1 className="text-4xl font-bold text-white">Piotr Gajownik - ExpandIt</h1>
                    <p className="text-lg mt-2 text-gray-200 text-center">
                        A better quality starts now.
                    </p>
                </div>
            </header>

            <main className="text-center flex-grow w-full max-w-[850px]">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white">About Me</h2>
                    <p className="text-gray-100 mt-4 mx-8">
                        For over 17 years, I have been involved in software testing, primarily through functional tests
                        for user interfaces. However, I am also familiar with other types of tests, such as unit,
                        integration, performance, and stress tests. For all these tests, I use various free tools,
                        though recently I have been focusing mainly on Playwright using TypeScript.
                    </p>
                    <p className="text-gray-100 mt-4 mx-8"></p>
                    <h4 className="text-xl font-semibold text-white">Test automation</h4>
                    <p className="text-gray-100 mt-4 mx-8">
                        Last 10 years, I have been involved in test automation. I have worked with various frameworks
                        and tools,
                        such as:
                    </p>
                    <ul className="mt-4 space-y-2 text-white mx-8 grid grid-cols-3 gap-4">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <img
                                    src={item.img}
                                    alt={`${item.name} Icon`}
                                    width={20}
                                    height={20}
                                    className="mb-2"
                                />
                                <span className="text-sm text-white">{item.name}</span>
                            </li>
                        ))}
                    </ul>


                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
                    <p className="text-gray-100 mt-4 mx-8">
                        In case of questions, contact me:
                    </p>
                    <ul className="mt-4 space-y-2 text-white mx-8">
                        <li>
                            <strong>Email:</strong> gajownikp@gmail.com
                        </li>
                        <li>
                            <strong>Phone:</strong> +48 504008035
                        </li>
                        <li>
                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/piotr-gajownik-a1515a65/"
                                                          className="text-black hover:underline" target="_blank"
                                                          rel="noopener noreferrer">Piotr Gajownik</a>
                        </li>
                    </ul>
                </section>
            </main>

            <footer className="text-center mt-12 text-gray-200 text-sm w-full max-w-[850px]">
                &copy; {new Date().getFullYear()} Piotr Gajownik - ExpandIt. All rights reserved.
            </footer>
        </div>
    );
}