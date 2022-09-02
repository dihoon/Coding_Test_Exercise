// 두 수 비교하기
// https://www.acmicpc.net/problem/1330

import java.io.*;
import java.util.Arrays;

public class _1330 {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int[] nums = Arrays.stream(br.readLine().split(" ")).mapToInt(x->Integer.parseInt(x)).toArray();
		
		int a = nums[0];
		int b = nums[1];
		
		if (a > b) {
			System.out.println(">");
		}else if (a < b) {
			System.out.println("<");
		}else {
			System.out.println("==");
		}
	}
}