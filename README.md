# Compound Interest Calculator with Graph

## Overview

This project is a **Compound Interest Calculator** that visualizes the growth of investments over time based on user-defined parameters. It calculates and compares the future value of investments with and without financial advisor fees, demonstrating the importance of low expenses in long-term investing.

## Formula

The formula for compound interest is given by:

$$ FV = P \left(1 + \frac{r}{n}\right)^{nt} + PMT \left( \frac{\left(1 + \frac{r}{n}\right)^{nt} - 1}{\frac{r}{n}} \right) $$

Where:

- **FV** = future value of the investment/loan, including interest
- **P** = initial principal (the initial amount of money)
- **PMT** = payment amount (the additional amount contributed every month)
- **r** = annual nominal interest rate (as a decimal)
- **n** = number of times that interest is compounded per year
- **t** = number of years the money is invested or borrowed

## Project Features

- **User Input Form**: Users can input their principal amount, interest rate, investment duration, and other parameters.
- **Graph Visualization**: The calculator displays a graph comparing the future values of investments with and without advisor fees.
- **Responsive Design**: The layout adapts to different screen sizes for optimal usability.

## The Impact of Low Expenses in Long-Term Investing

Investing in low-cost index funds (ETFs) rather than high-cost actively managed funds can significantly impact long-term returns. Here’s how:

1. **Compounding Effect**: Lower expenses allow a greater portion of your investment to grow over time. Even a small difference in fees can compound to a substantial amount over many years.
   
2. **Reduced Fees**: Financial advisors often charge a percentage of assets under management (AUM) or a flat fee, which can eat into your returns. For example, a 2% fee compared to a 0.05% fee can result in tens or hundreds of thousands of dollars lost over decades.

3. **Performance**: Studies have shown that actively managed funds often do not outperform their benchmark indexes after fees are taken into account. By investing in low-cost index funds, investors can typically achieve better returns over time.

4. **Transparency**: Low-cost investments often have clearer fee structures, making it easier for investors to understand the costs associated with their investments.

### Conclusion

This compound interest calculator serves as a powerful tool to illustrate the importance of managing investment expenses. By keeping fees low and avoiding unnecessary costs associated with financial advisors, investors can harness the full power of compound interest, leading to greater wealth accumulation over time.

## Installation

To run this project locally, simply clone the repository and open `index.html` in your web browser. Ensure you have an internet connection for Chart.js and MathJax.

```bash
git clone [repository-url]
cd [project-directory]
open index.html
