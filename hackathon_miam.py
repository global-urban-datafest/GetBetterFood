import pandas as pd
import numpy as np

data = pd.read_csv("food_inspection.csv", nrows = 20000)
data.index.name = 'index'
zip = data["Zip Code"]
Score =data["Inspection Score"]

n1 = int(np.min(zip))
n2= int(np.max(zip))

N = {}
S = {}
for  i in zip:
        xl = np.where(zip ==i)[0]
        N[i] = len(zip[xl])
        S[i] = np.sum(Score[xl])/float(len(zip[xl]))

new_data = np.column_stack([N.keys(), N.values(), S.values()])
df = pd.DataFrame(new_data, columns = ("zip", "number", "score"))
df.to_csv("score_zip_foodinspection.csv")
#data.to_csv("new_foodinspection.csv")