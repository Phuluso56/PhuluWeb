#!/usr/bin/env python
# coding: utf-8

# In[1]:


f=open(r"C:\Users\Phuluso N\Downloads\One Piece Page Views Wiki.csv")
print(f.read())


# In[2]:


import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_csv(r"C:\Users\Phuluso N\Downloads\One Piece Page Views Wiki.csv")
df.set_index('Date').plot()
plt.show()


# In[3]:


import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv(r"C:\Users\Phuluso N\Downloads\One Piece Page Views Wiki.csv")
data.set_index('Date').plot()
plt.show()
print(data.info())


# In[4]:


data_array = np.array(data)
data_array


# In[5]:


#Csv to X and Y values

import csv
x = []
y = []
 
with open(r"C:\Users\Phuluso N\Downloads\One Piece Page Views Wiki.csv") as csvfile:    
    csvReader = csv.reader(csvfile)    
    for row in csvReader:        
        x.append(row[0]), y.append(row[1])
        
print(y)


# In[6]:


y.pop(0) #remove first value
yval = [eval(i) for i in y] #Change string to integers
print("Modified list is: ", yval)


# In[7]:


x.pop(0)
print(x)


# In[ ]:




