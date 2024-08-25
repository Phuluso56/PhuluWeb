#!/usr/bin/env python
# coding: utf-8

# In[1]:


import matplotlib.pyplot as plt
import numpy as np
import math


# In[117]:


fig, ax = plt.figure(), plt.axes()
g = lambda x : 5*np.log(x)
X = np.linspace(0.001, 25, 100)
ax.plot(X,g(X))
plt.xlabel("Stimulus Strength")
plt.ylabel("Percieved strength")
plt.title("Fencher function",size=15,fontweight="bold")

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


# In[118]:


fig, ax = plt.figure(), plt.axes()
g = lambda x : 0.8*np.exp(-1*x)
X = np.linspace(0.001, 25, 100)
ax.plot(X,g(X))
plt.xlabel("Time")
plt.ylabel("Recalling Probability")
plt.title("Memory retention",size=15,fontweight="bold")

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


# In[80]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [1, 2, 3, 4, 5]
y1 = [2, 4, 6, 8, 10]
y2 = [10, 8, 6, 4, 2]

#dotted line data
x2 = [1, 2, 3]
y3 = [6, 6, 6]

x3 = [3, 3, 3]
y4 = [2, 4, 6]

# Create plot
plt.plot(x, y1,color='red', label="Line 1")
plt.plot(x, y2,color='blue', label='Demand')
plt.plot(x2, y3,":", color='black')
plt.plot(x3, y4,":", color='black')

plt.plot(3, 6, "or")

#axes label
plt.xlabel("Quantity")
plt.ylabel("Price(R)")


# Show plot
plt.title('Demand and Supply', fontsize=18)

#Adds 1 point
plt.annotate('$E_0$', xy=(1, 2), xytext=(3, 6))

#remove axis label
plt.xticks([3],["$Q_0$"])
plt.yticks([6],["$P_0$"])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)

plt.show()


# In[100]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()
# Create data
x = [1, 2, 3, 4, 5]
y1 = [2, 4, 6, 8, 10]
y2 = [10, 8, 6, 4, 2]
y10 = [0 ,2,4,6,8]

#dotted line data
x2 = [1, 2, 3]
y3 = [6, 6, 6]

x3 = [3.5, 3.5, 3.5,3.5]
y4 = [0, 4, 6,7.1]

#dotted line data
x7 = [1, 2, 3, 3.5]
y7 = [7.1, 7.1, 7.1,7.1]

x8 = [3, 3, 3]
y8 = [0, 4, 6]

# Create plot
plt.plot(x, y1,color='red', label="Line 1")
plt.plot(x, y10,color='red', label="Line 1")
plt.plot(x, y2,color='blue', label='Demand')
plt.plot(x2, y3,":", color='black')
plt.plot(x3, y4,":", color='black')
plt.plot(x7, y7,":", color='black')
plt.plot(x8, y8,":", color='black')

#OnePoint
plt.plot(3, 6, "or")
plt.plot(3.5, 5.05, "or")


#axes label
plt.xlabel("Quantity")
plt.ylabel("Price(R)")


# Show plot
plt.title('Rise in Supply', fontsize=18)

#label 1 point
plt.annotate('$E_0$', xy=(1, 2), xytext=(3, 6))
plt.annotate('$E_1$', xy=(1, 2), xytext=(3.5, 5.05))


#remove axis label
plt.xticks([3,3.5],["$Q_0$","$Q_1$"])
plt.yticks([6,5.05],["$P_0$","$P_1$"])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[98]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [1, 2, 3, 4, 5]
y1 = [2, 4, 6, 8, 10]
y2 = [10, 8, 6, 4, 2]
y10 = [8 ,6,4,2,0]

#dotted line data
x2 = [1, 2, 3]
y3 = [6, 6, 6]

x3 = [3, 3, 3]
y4 = [0, 4, 6]

#dotted line data
x7 = [1, 2, 2.5]
y7 = [5.05, 5.05, 5.05]

x8 = [2.5, 2.5, 2.5]
y8 = [0, 4, 5.05]

# Create plot
plt.plot(x, y1,color='red', label="Line 1")
plt.plot(x, y10,color='blue', label="Line 1")
plt.plot(x, y2,color='blue', label='Demand')
plt.plot(x2, y3,":", color='black')
plt.plot(x3, y4,":", color='black')
plt.plot(x7, y7,":", color='black')
plt.plot(x8, y8,":", color='black')

#OnePoint
plt.plot(3, 6, "or")
plt.plot(2.5, 5.05, "or")


#axes label
plt.xlabel("Quantity")
plt.ylabel("Price(R)")


# Show plot
plt.title('Fall in Demand', fontsize=18)

#label 1 point
plt.annotate('$E_0$', xy=(1, 2), xytext=(3, 6))
plt.annotate('$E_1$', xy=(1, 2), xytext=(2.5, 5.05))


#remove axis label
plt.xticks([3,2.5],["$Q_0$","$Q_1$"])
plt.yticks([6,5.05],["$P_0$","$P_1$"])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[ ]:


plt.fill_between(x, y1, color='red')


# In[131]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

x = [1, 2, 3,4,5,6,7,8,9,10]
y = [1, 1/2,1/3,1/4,1/5,1/6,1/7,1/8,1/9,1/10]
y2=[0.25, 0.25, 0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25]
y4=[-0.25, -0.25, -0.25,-0.25,-0.25,-0.25,-0.25,-0.25,-0.25,-0.25]


plt.annotate('$L+ε$',color='red', xy=(10, 0.25), xytext=(10, 0.25))
plt.annotate('$L-ε$',color='Red', xy=(10, 0.25), xytext=(10, -0.25))

plt.title(r'Example: sequence $(\frac{1}{n})$ is convergent', fontsize=18)

# Scatter plot
plt.plot(x, y,"o",color='blue', label="Line 1")
plt.plot(x, y2,color='red', label="Line 1")
plt.plot(x, y4,color='red', label="Line 1")

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[102]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()
# Create data
x = [15, 14, 13, 12, 11,10,9,8,7,6,5,4,3,2,1,0]
y1 = [0,1.2,2.4,3.6,4.8,6,7.2,8.4,9.6,10.8,12,13.2,14.4,15.6,16.8,18]

#dotted line data
x2 = [0,1, 2, 3,4,5,6,7,8,9,10]
y3 = [6, 6, 6,6,6,6,6,6,6,6,6]

x3 = [10,10,10,10,10,10]
y4 = [0,2,3,4,5,6]

# Create plot
plt.plot(x, y1,color='blue', label="Line 1")
plt.plot(x2, y3,":", color='black')
plt.plot(x3, y4,":", color='black')

plt.plot(10, 6, "or")
plt.plot(12, 7, "or")

#axes label
plt.xlabel("Fish")
plt.ylabel("Fire logs")


# Show plot
plt.title('Division of tasks', fontsize=18)

#Adds 1 point
plt.annotate('A', xy=(1, 2), xytext=(10, 6.5))
plt.annotate('B(12,7)', xy=(1, 2), xytext=(12, 7.5))

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)

plt.show()


# In[103]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()
# Create data
x = [15, 14, 13, 12, 11,10,9,8,7,6,5,4,3,2,1,0]
y1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
y2 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]



# Create plot
plt.plot(x, y1,color='blue', label="Line 1")



#axes label
plt.xlabel("Capital(K)", weight='bold')
plt.ylabel("Labour(L)", weight='bold')


# Show plot
plt.title('Isocost', fontsize=18)

#Adds 1 point

#remove axis label
plt.xticks([])
plt.yticks([])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[104]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [15, 14, 13, 12, 11,10,9,8,7,6,5,4,3,2,1,0]
y1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
y2 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]



# Create plot
plt.plot(x, y1,color='blue', label="Line 1")
plt.plot(x, y2,color='purple', label="Line 1")



#Shift in curve
plt.xlabel("Y", weight='bold')
plt.ylabel("X", weight='bold')

#anote
plt.annotate("Shift", xy=(10, 7), xytext=(8, 5),
             arrowprops=dict(facecolor='black', arrowstyle='->'))


# Show plot
plt.title('Isocost shift', fontsize=18)

#Adds 1 point

#remove axis label
plt.xticks([])
plt.yticks([])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[105]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [0, 0.1, 0.2, 0.3, 0.4,0.5,0.6,0.7,0.8,0.9,1]
y1 = [0,0.01,0.04,0.09,0.16,0.25, 0.36,0.49,0.64,0.80,1 ]
y2 = [0, 0.1, 0.2, 0.3, 0.4,0.5,0.6,0.7,0.8,0.9,1]


# Create plot
plt.plot(x, y1,color='black', label="Line 1")
plt.plot(x, y2,"--",color='red', label="Line 1")
plt.plot(0.3, 0.09, "or", color='black')


#axes label
plt.xlabel("X")
plt.ylabel("$Y=L(x)$")


# Show plot
plt.title('Lorenz Curve', fontsize=18)
plt.annotate('(0.3,0.09)',color='black', xy=(0.4, 0.050), xytext=(0.31, 0.05))
plt.annotate('$Y=L(x)$',color='black',weight='bold', xy=(0.4, 0.050), xytext=(0.92, 0.8))

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[116]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [0, 0.1, 0.2, 0.3, 0.4,0.5,0.6,0.7,0.8,0.9,1]
y1 = [0,0.01,0.04,0.09,0.16,0.25, 0.36,0.49,0.64,0.80,1 ]
y2 = [0, 0.1, 0.2, 0.3, 0.4,0.5,0.6,0.7,0.8,0.9,1]



#dotted line data
x2 = [1, 1, 1]
y3 = [0, 0.5, 1]

x3 = [0, 0.5, 1]
y4 = [0, 0, 0]



# Create plot
plt.plot(x, y1,color='black', label="Line 1")
plt.plot(x, y2,color='tomato', label="Line 1")
plt.plot(x2, y3,'--',color='black', label="Line 1")
plt.plot(x3, y4,'--',color='black', label="Line 1")



#axes label
plt.xlabel("X")
plt.ylabel("$Y=L(x)$")


# Show plot
plt.title('Lorenz Curve', fontsize=18)

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


#Shading

plt.fill_between(x, y1, y2, where=y2 >= y1, facecolor='cornsilk', interpolate=True)
plt.fill_between(x, y1, facecolor='bisque', interpolate=True)

plt.annotate('$Y=x$',color='tomato', xy=(0.5, 0.5), xytext=(0.5, 0.6))
plt.annotate('$Y=L(x)$',color='black', xy=(0.5, 0.5), xytext=(0.7, 0.3))

plt.annotate('A',color='black',fontweight='bold', xy=(0.5, 0.5), xytext=(0.5, 0.4))
plt.annotate('B',color='black',fontweight='bold', xy=(0.5, 0.5), xytext=(0.6, 0.2))



plt.show()


# In[91]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15]
y1 = [1,1.103125,1.09375,1.219,1.469,1.97,2.97,4.91,8.97,13.97,17.97,21.97,23.97,24.97,25.469,25.25]


# slopes1
s1=[0,4]
s2=[0,y1[4]]



s5=[0,6]
s6=[0,y1[6]]



s3=[0,12]
s4=[0,y1[12]]

s7=[0,10]
s8=[0,y1[10]]

# slopes2
c1=[4,4]
c2=[0,y1[4]]

c5=[6,6]
c6=[0,y1[6]]

c3=[10,10]
c4=[0,y1[10]]

c7=[12,12]
c8=[0,y1[12]]



# Create plot
plt.plot(x, y1,color='blue', label="Line 1")

plt.plot(s1, s2,":", color='black')
plt.plot(s3, s4,":", color='black')
plt.plot(s5, s6,":", color='black')
plt.plot(s7, s8,":", color='black')

plt.plot(c1, c2,":", color='black')
plt.plot(c3, c4,":", color='black')
plt.plot(c5, c6,":", color='black')
plt.plot(c7, c8,":", color='black')


#Shift in curve
plt.ylabel("Total Product", weight='bold')
plt.xlabel("Labour", weight='bold')



# Show plot
plt.title('Production function', fontsize=18)

#Adds 1 point

#remove axis label


#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[94]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15]
y1 = [None,0.5515,0.365,0.305,0.2938,0.328,0.424,0.61375,0.997,1.397,1.634,1.831,1.844,1.7836,1.6979,1.68]

y2 = [None,0.03125,0.0625,0.125,0.25,0.5,1,2,4,5,4,2,1,0.5,0.25,0.125]

y4 = [1,1.103125,1.09375,1.219,1.469,1.97,2.97,4.91,8.97,13.97,17.97,21.97,23.97,24.97,25.469,25.25]



# Create plot
plt.plot(x, y1,color='blue', label="Line 1")
plt.plot(x, y2,color='red', label="Line 1")
plt.plot(x, y2,color='red', label="Line 1")

#Shift in curve
plt.ylabel("Product", weight='bold')
plt.xlabel("Labour", weight='bold')



# Show plot
plt.title('Marginal and average product', fontsize=18)

#Adds 1 point

#remove axis label


#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[143]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [ 1, 2, 3, 4,5,6,7,8,9,10]
y1 = [1, 0.5, 0.33, 0.25, 0.2,0.167,0.143,0.125,0.11,0.1]
y2 = [None, 1, 0.67, 0.5,0.4,0.33,0.286,0.25,0.22,0.2]




# Create plot
plt.plot(x, y1,color='blue', label="Line 1")
plt.plot(x, y2,color='dodgerblue', label="Line 1")


#Shift in curve
plt.ylabel("Marks", weight='bold')
plt.xlabel("Free time", weight='bold')



# Show plot
plt.title('Indifference curves', fontsize=18)

#label

plt.annotate('$U_1(x,y)$',color='blue',weight='bold', xy=(10, 0.1), xytext=(9.2, 0.12))
plt.annotate('$U_2(x,y)$',color='dodgerblue',weight='bold', xy=(10, 0.2), xytext=(9.2, 0.22))


#remove axis label
plt.xticks([])
plt.yticks([])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[161]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [ 0,1, 2, 3, 4,5,6,7,8,9,10]
y1 = [1,0.75,0.5,0.25,0,None,None,None,None,None,None]
y2 = [1,0.5,0,None,None,None,None,None,None,None,None]




# Create plot
plt.plot(x, y1,color='blue', label="Line 1")
plt.plot(x, y2,color='dodgerblue', label="Line 1")



#Shift in curve
plt.ylabel("Marks", weight='bold')
plt.xlabel("Free time", weight='bold')



# Show plot
plt.title('Budget lines', fontsize=18)

#label

plt.annotate('$U_1(x,y)$',color='blue',weight='bold', xy=(10, 0.1), xytext=(9.2, 0.12))
plt.annotate('$U_2(x,y)$',color='dodgerblue',weight='bold', xy=(10, 0.2), xytext=(9.2, 0.23))


#remove axis label
plt.xticks([])
plt.yticks([])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[160]:


import matplotlib.pyplot as plt

fig, ax = plt.subplots()

# Create data
x = [ 0,1, 2, 3, 4,5,6,7,8,9,10]
y1 = [1,0.75,0.5,0.25,0,None,None,None,None,None,None]
y2 = [1.33,1.11,0.89,0.67,0.45,0.23,0.01,None,None,None,None]
y3 = [None,1, 0.5, 0.33, 0.25, 0.2,0.167,0.143,0.125,0.11,0.1]
y4=[None,None, 1, 0.67, 0.5,0.4,0.33,0.286,0.25,0.22,0.2]



# Create plot
plt.plot(x, y1,color='gray', label="Line 1")
plt.plot(x, y2,color='gray', label="Line 1")
plt.plot(x, y3,color='black', label="Line 1")
plt.plot(x, y4,color='black', label="Line 1")

plt.plot(2, 0.5, "or", color='black')
plt.plot(3,0.67 , "or", color='black')



#Shift in curve
plt.ylabel("Marks", weight='bold')
plt.xlabel("Free time", weight='bold')



# Show plot
plt.title('Constrained choice problem', fontsize=18)

#label

plt.annotate('$U_1(x,y)$',color='blue',weight='bold', xy=(10, 0.1), xytext=(9.2, 0.12))
plt.annotate('$U_2(x,y)$',color='dodgerblue',weight='bold', xy=(10, 0.2), xytext=(9.2, 0.23))


#remove axis label
plt.xticks([])
plt.yticks([])

#background color and footnote
ax.set_facecolor('azure')
fig.set_facecolor('skyblue')
ax.annotate('Phuluso N',fontstyle='italic',color='black',xy = (1.0, -0.15), xycoords='axes fraction',ha='right',va="center",fontsize=11)


plt.show()


# In[ ]:




