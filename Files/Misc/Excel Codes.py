#!/usr/bin/env python
# coding: utf-8

# In[ ]:


f=open(r"C:\Users\Phuluso N\Downloads\One piece project.xlsx")
print(f.read())


# In[2]:


# import pandas lib as pd
import pandas as pd

# read by default 1st sheet of an excel file
dataframe1 = pd.read_excel(r"C:\Users\Phuluso N\Downloads\One piece project.xlsx")

print(dataframe1)


# In[17]:


A=dataframe1.to_numpy()


# In[30]:


Year,VolSold_Japan, Saga, chapters_a_year, Total_volume_sales, top_selling=zip(*A)


# In[31]:


VolSold_Japan


# In[ ]:




