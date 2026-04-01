package PractiseTestProblems;

public class ecommercePlatform {
    public int maxDistinctRemaining(int[] purchases, int k) {
        int n = purchases.length;

        // If k covers the whole array, 0 products remain
        if (k >= n) {
            return 0;
        }

        // Step 1: Count total frequencies and initial unique product count
        int[] totalCounts = new int[100001];
        int totalUnique = 0;
        for (int p : purchases) {
            if (totalCounts[p] == 0) {
                totalUnique++;
            }
            totalCounts[p]++;
        }

        // If k is 0, no items are removed
        if (k == 0) {
            return totalUnique;
        }

        // Step 2: Initialize sliding window of size k
        int[] windowCounts = new int[100001];
        int fullyRemovedCount = 0;

        // Populate the first window [0...k-1]
        for (int i = 0; i < k; i++) {
            int p = purchases[i];
            windowCounts[p]++;
            // If all occurrences of this product are inside the window, it's fully removed
            if (windowCounts[p] == totalCounts[p]) {
                fullyRemovedCount++;
            }
        }

        int maxDistinct = totalUnique - fullyRemovedCount;

        // Step 3: Slide the window across the rest of the array
        for (int i = k; i < n; i++) {
            int entering = purchases[i];
            int leaving = purchases[i - k];

            // Add the new element to the window
            windowCounts[entering]++;
            if (windowCounts[entering] == totalCounts[entering]) {
                fullyRemovedCount++;
            }

            // Remove the element that is sliding out of the window
            if (windowCounts[leaving] == totalCounts[leaving]) {
                fullyRemovedCount--;
            }
            windowCounts[leaving]--;

            // Update the maximum remaining unique products
            int currentRemaining = totalUnique - fullyRemovedCount;
            if (currentRemaining > maxDistinct) {
                maxDistinct = currentRemaining;
            }
        }

        return maxDistinct;
    }

    public static void main(String[] args) {
        int[] purchases = {1, 2, 3, 2, 1, 4};
        int k = 2;
        ecommercePlatform platform = new ecommercePlatform();
        System.out.println(platform.maxDistinctRemaining(purchases, k)); // Output should reflect the maximum distinct products remaining after removing any contiguous subarray of size k
    }
}
