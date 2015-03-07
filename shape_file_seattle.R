library(rgdal)
library(zipcode)

data(zipcode)



sp_data = readOGR("/Users/bigdata/Dropbox/smartcity", "cb_2013_us_zcta510_500k")

seattle <- sp_data[sp_data$GEOID10 %in% zipcode[zipcode$city=="Seattle",]$zip,]

writeOGR(seattle, "/Users/bigdata/Dropbox/smartcity/seattle_shape_file", "seattle_shape", driver = "ESRI Shapefile")
plot(seattle)


