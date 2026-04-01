package PractiseTestProblems;

/*
A transportation system consists of n checkpoints arranged in a straight line. A traveler must move from checkpoint 0 to checkpoint n.
Between each pair of consecutive checkpoints, two types of lanes are available:
- Regular Lane
- Express Lane
Using the express lane requires a one-time activation fee, but once activated, it can be used for the remaining journey.
You are given:
- An array regular where regular[i] represents the cost to travel from checkpoint i to i+1 using the regular lane.
- An array express where express[i] represents the cost to travel from checkpoint i to i+1 using the express lane.
- An integer expressCost representing the activation cost required the first time the express lane is used.
The traveler may switch between lanes at any checkpoint, but the express lane can only be used after paying the activation cost once.

Your task is to compute:
The minimum cost required to reach each checkpoint from checkpoint 0.
Return an array result of size n, where result[i] represents the minimum cost to reach checkpoint i+1.

Input Format
- Integer array regular
- Integer array express
- Integer expressCost

Output Format
Integer array result
Constraints
1 ≤ n ≤ 10^5
1 ≤ regular[i], express[i] ≤ 10^5
1 ≤ expressCost ≤ 10^5
 
*/

public class transportationCost {
    static int[] minTravelCost(int[] regular, int[] express, int expressCost){
        int[] result = new int[regular.length];
        int dpReg = 0;
        int dpExp = expressCost;
        for(int i=0; i<regular.length; i++){
           int nextReg = Math.min(dpReg + regular[i], dpExp+regular[i]);
           int nextExp = Math.min(dpReg+expressCost+express[i], dpExp+express[i]);

           dpReg = nextReg;
           dpExp = nextExp;
           result[i] = Math.min(dpReg, dpExp);
        }
        return result;
    } 
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        int[] regular = {5,9,10};
        int[] express = {3,2,1};
        int expressCost = 4;
        int[] costs = minTravelCost(regular, express, expressCost);
        for(int cost : costs){
            System.out.println(cost + " ");
        }
    }
}
