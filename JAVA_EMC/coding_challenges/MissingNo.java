package coding_challenges;

public class MissingNo {
        public int missingNumber() {
            int[] nums={0,3,1};
            int n = nums.length;
            int expectedSum = n * (n + 1) / 2;
            int actualSum = 0;
            for (int num : nums) {
                actualSum += num;
            }
            return expectedSum - actualSum;
        }
    public static void main(String[] args) {
        MissingNo m1=new MissingNo();
        m1.missingNumber();
    }
    
}
