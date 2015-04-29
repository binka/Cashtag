# Cashtag

by David Bittle, Chris Gray, Prad Kikkeri, Kirill Novik, Lincoln Samelson, Alex Worth
Big Data Spring 2015

Main GitHub repository for CashTag project.

CashTag aims to visualize StockTwits. You can view them by date, and sort by "bullish" (positive) and "bearish" (negative) sentimented tweets as well. The goal is to help a user find trends and find events and twits that correlate to a specific rise or fall in the stock.

All folders are for frontend interface.

Initially, we used a series of python scripts to read tweets directly from Twitter's live feed.

However, we have since migrated to StockTwits and used their historical data since 2010, which is in JSON format.

We have a constituents.csv that lists all the stock symbols for reference.
