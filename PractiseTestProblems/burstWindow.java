package PractiseTestProblems;

public class burstWindow {
    /**
     * Finds the longest contiguous segment with at most k distinct error codes.
     * Uses a frequency array for O(1) lookups and O(n) total time complexity.
     */
    public int longestBurstWindow(int[] logs, int k) {
        if (logs == null || logs.length == 0 || k == 0) {
            return 0;
        }

        int n = logs.length;
        // Frequency array: index is errorCode, value is frequency in current window
        // Size 100,001 covers the constraint 0 <= logs[i] <= 10^5
        int[] counts = new int[100001];
        
        int left = 0;
        int maxLen = 0;
        int distinctCount = 0;

        for (int right = 0; right < n; right++) {
            int currentCode = logs[right];
            
            // If this is the first time we see this code in the current window
            if (counts[currentCode] == 0) {
                distinctCount++;
            }
            counts[currentCode]++;

            // If we exceed k distinct codes, shrink the window from the left
            while (distinctCount > k) {
                int leftCode = logs[left];
                counts[leftCode]--;
                
                // If frequency hits 0, this distinct code is no longer in the window
                if (counts[leftCode] == 0) {
                    distinctCount--;
                }
                left++;
            }

            // Calculate current window size and update max
            int currentWindowSize = right - left + 1;
            if (currentWindowSize > maxLen) {
                maxLen = currentWindowSize;
            }   
        }

        return maxLen;
    }

    public static void main(String[] args) {
        burstWindow bw = new burstWindow();
        int[] logs = {1, 2, 1, 3, 4, 2, 3};
        int k = 2;
        int result = bw.longestBurstWindow(logs, k);
        System.out.println("Longest burst window with at most " + k + " distinct error codes: " + result);
    }
}
    