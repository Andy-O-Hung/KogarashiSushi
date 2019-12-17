using System;
using Xunit;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace SeleniumDemo
{
    public class DemoTest : IDisposable
    {
        public IWebDriver driver;
        public WebDriverWait wait;

        public DemoTest()
        {
            var chromeOptions = new ChromeOptions();
            //chromeOptions.AddArguments("headless");
            var chromeDriver = System.IO.Directory.GetCurrentDirectory();
            driver = new ChromeDriver(chromeDriver, chromeOptions);
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
        }
        [Fact]
        public void Test1()
        {
            driver.Navigate().GoToUrl("http://localhost:4200");
            wait.Until(x => x.FindElement(By.LinkText("Menu")));
            driver.FindElement(By.LinkText("Menu")).Click();
            wait.Until(x => x.FindElement(By.Id("ctMenu")));
            driver.FindElement(By.Id("ctMenu")).Click();
        }
        public void Dispose()
        {
            try
            {
                driver.Dispose();
            }
            catch (Exception)
            {
                // Ignore errors if unable to close the browser
            }
        }
}
}
