package PractiseTestProblems;

/*
You are given a string s consisting of uppercase letters, lowercase letters, digits, and special characters.
Your task is to reverse only the alphabetic characters in the string while keeping all non-letter characters in their original positions.
Letters include characters from 'a' to 'z' and 'A' to 'Z'.
Return the modified string after reversing only the letters.

Input Format
A string s
Output Format
A string after reversing only its letters
*/

public class advancedReverseString {
    public String reverseLetters(String s) {
        if (s == null || s.length() < 2) {
            return s;
        }

        char[] chars = s.toCharArray();
        int left = 0;
        int right = chars.length - 1;

        while (left < right) {
            // Move the left pointer until an alphabetic character is found
            while (left < right && !isAlphabetic(chars[left])) {
                left++;
            }
            
            // Move the right pointer until an alphabetic character is found
            while (left < right && !isAlphabetic(chars[right])) {
                right--;
            }

            // Swap letters and move pointers
            if (left < right) {
                char temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
                left++;
                right--;
            }
        }

        return new String(chars);
    }

    /**
     * Helper method to check if a character is a letter (A-Z or a-z).
     */
    private boolean isAlphabetic(char c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }

    public static void main(String[] args) {
        advancedReverseString solution = new advancedReverseString();
        String input = "ab-cd";
        String output = solution.reverseLetters(input);
        System.out.println(output); 
    }
}