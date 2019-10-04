# Rodas and Libraries

The Ruler of HackerLand believes that every citizen of the country should have access to a library. Unfortunately, HackerLand was hit by a tornado that destroyed all of its libraries and obstructed its roads! As you are the greatest programmer of HackerLand, the ruler wants your help to repair the roads and build some new libraries efficiently.

HackerLand has **n** cities numbered from **1** to **n**. The cities are connected by **m** bidirectional roads. A citizen has access to a library if:

* Their city contains a library.
* They can travel by road from their city to a city containing a library.

The following figure is a sample map of HackerLand where the dotted lines denote obstructed roads:

![example 1](https://s3.amazonaws.com/hr-challenge-images/0/1481983010-b779ad2b2b-torque1.png)

The cost of repairing any road is **c_road** dollars, and the cost to build a library in any city is **c_lib** dollars. If in the above example **c_road = 2** and **c_lib = 3**, we would build **5** roads at a cost of **5 * 2 = 10** and **2** libraries for a cost of **6**. We don't need to rebuild one of the roads in the cycle **1 -> 2 -> 3 -> 1**.

You are given **q** queries, where each query consists of a map of HackerLand and value of **c_lib** and **c_road**. For each query, find the minimum cost of making libraries accessible to all the citizens and print it on a new line.

## Function Description

Complete the function roadsAndLibraries in the editor below. It must return the minimal cost of providing libraries to all, as an integer.

roadsAndLibraries has the following parameters:

* n: integer, the number of cities
* c_lib: integer, the cost to build a library
* c_road: integer, the cost to repair a road
* cities: 2D array of integers where each **cities[i]** contains two integers that represent cities connected by an obstructed road .

## Input Format

The first line contains a single integer **q**, that denotes the number of queries.

The subsequent lines describe each query in the following format:

* The first line contains four space-separated integers that describe the respective values of **n**, **m**, **c_lib** and **c_road**, the number of cities, number of roads, cost of a library and cost of a road.
* Each of the next **m** lines contains two space-separated integers, **u[i]** and **v[i]**, that describe a bidirectional road that connects cities **u[i]** and **v[i]**.

## Output Format

For each query, print an integer that denotes the minimum cost to make libraries accessible to all the citizens on a new line.

## Sample Input

```plain
2
3 3 2 1
1 2
3 1
2 3
6 6 2 5
1 3
3 4
2 4
1 2
2 3
5 6
```

## Sample Output

```plain
4
12
```
