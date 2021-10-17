from sklearn.tree import DecisionTreeClassifier
import pandas as pd


data = pd.read_csv('datasets/data.csv')
df = pd.DataFrame(data)


def prediction(district, crop):
    years = [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
             2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013]
    yld_yearwise = []
    Area = []
    for year in years:
        area = df.loc[(df["District_Name"] == district) & (df["Crop"] == crop) & (
            df["Area"].notnull()) & (df["Production"].notnull()) & (df["Crop_Year"] == year)]["Area"].to_list()
        production = df.loc[(df["District_Name"] == district) & (df["Crop"] == crop) & (
            df["Area"].notnull()) & (df["Production"].notnull()) & (df["Crop_Year"] == year)]["Production"].to_list()
        if len(area) != 0:
            crop_yield = production[0]/area[0]
            yld_yearwise.append(crop_yield)
            Area.append(area[0])
        else:
            yld_yearwise.append(0)
            Area.append(0)

    df1 = pd.DataFrame(
        {
            "year": years,
            "Area": Area,
            "yield": yld_yearwise
        }
    )
    year = df1.drop(columns='yield')
    yld = df1['yield']
    model = DecisionTreeClassifier()
    model.fit(year, yld)
    model.predict([2020, area[0]])


prediction("ARIYALUR", "Rice")
