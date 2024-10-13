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


# In[41]:


Year


# In[37]:


g=['No',
 'No',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'No',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'Yes',
 'No',
 'No',
 'No',
 'No',
 'No']


# In[40]:


VolSold_Japan


# In[ ]:


[1997,
 1998,
 1999,
 2000,
 2001,
 2002,
 2003,
 2004,
 2005,
 2006,
 2007,
 2008,
 2009,
 2010,
 2011,
 2012,
 2013,
 2014,
 2015,
 2016,
 2017,
 2018,
 2019,
 2020,
 2021,
 2022,
 2023]


# In[1]:


Arcs["Romance Dawn Arc","Orange Town Arc","Syrup Village Arc
","Baratie Arc
","Arlong Park Arc
","Loguetown Arc
","Reverse Mountain Arc
","Whisky Peak Arc
","Little Garden Arc
","Drum Island Arc
","Arabasta Arc
","Jaya Arc
","Skypiea Arc
","Long Ring Long Land Arc
","Water 7 Arc
","Enies Lobby Arc
","Post-Enies Lobby Arc
","Thriller Bark Arc
","Sabaody Archipelago Arc
","Amazon Lily Arc
","Impel Down Arc
","Marineford Arc
","Post-War Arc
","Return to Sabaody Arc
","Fish-Man Island Arc
","Punk Hazard Arc
","Dressrosa Arc
","Zou Arc
","Whole Cake Island Arc
","Levely Arc
","Wano Country Arc
","Egghead Arc
","Land of Gods Arc
",""]


# In[3]:


Arcs=["Romance Dawn Arc","Orange Town Arc","Syrup Village Arc","Baratie Arc","Arlong Park Arc","Loguetown Arc","Reverse Mountain Arc","Whisky Peak Arc","Little Garden Arc","Drum Island Arc","Arabasta Arc","Jaya Arc","Skypiea Arc","Long Ring Long Land Arc","Water 7 Arc","Enies Lobby Arc","Post-Enies Lobby Arc","Thriller Bark Arc","Sabaody Archipelago Arc","Amazon Lily Arc","Impel Down Arc","Marineford Arc","Post-War Arc","Return to Sabaody Arc","Fish-Man Island Arc","Punk Hazard Arc","Dressrosa Arc","Zou Arc","Whole Cake Island Arc","Levely Arc","Wano Country Arc","Egghead Arc","Land of Gods Arc",""]


# In[4]:


Arcs


# In[5]:


chapters=[7,14,20,27,27,5,5,9,15,25,63,19,66,19,56,11,48,24,11,25,31,17,5,51,46,102,23,78,6,149,68,0]


# In[6]:


chapters


# In[7]:


Episodes=[4,5,10,12,14,7,3,4,8,14,39,9,43,15,37,46,13,45,21,14,27,33,26,6,51,46,118,29,95,12,191,37,0]


# In[8]:


Episodes


# In[ ]:




