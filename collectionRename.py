#collection renamed
#



symbolList = [
('CAT', 'Caterpillar'),('CVX', 'Chevron'),	
('CSCO', 'Cisco'),('KO', 'CocaCola'),
('DIS', 'Disney'),('DD', 'duPont'),
('XOM', 'ExxonMobil'),('GE', 'GeneralElectric'),('GS', 'GoldmanSachs'),
('SNE','Sony'),('HD', 'HomeDepot'),('IBM','IBM'),
('INTC','Intel'),('JNJ', 'JohnsonJohnson'),
('JPM', 'JPMorganChase'),('MCD', 'McDonald'),
('MRK', 'Merck'),('MSFT', 'Microsoft'),('NKE', 'Nike'),
('PFE', 'Pfizer'),('PG', 'ProcterGamble'),
('UTX', 'UnitedTechnologies'),('UNH', 'UnitedHealth'),('VZ', 'Verizon'),
('V', 'Visa'),('WMT', 'WalMart')
('BA', 'Boeing'),('FORD','Ford'),('MCD','McDonalds'),('AAPL','Apple'),('TRV', 'TravelersCompanies'),
 ('AAPL', 'Apple'),
('BA', 'Boeing')
 ]



#don't fit into this format
#('MMM', '3M'),('AXP', 'American Express')

megaString =""
for x in range(0,len(SymbolList)):
    collectionName = SymbolList[x][1]
    symbol = SymbolList[x][0]
    #print("db."+collectionName+"2014.renameCollection(\""+collectionName+"\");")
    
    megaString = "db."+collectionName+".renameCollection(\""+symbol+"\"); "+megaString

print(megaString)
