// 곱셈
// https://www.acmicpc.net/problem/2588
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class _2588 {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int num1 = Integer.parseInt(br.readLine());
		
		int[] num2 = new int[3];
		
		int first;
		int second;
		int third;
		int total;
		
		num2 = Arrays.stream(br.readLine().split("")).mapToInt(x->Integer.parseInt(x)).toArray();
		
		first = num2[2]*num1;
		second = num2[1]*num1;
		third = num2[0]*num1;
		
		total = first + second*10 + third*100;
		
		System.out.println(first);
		System.out.println(second);
		System.out.println(third);
		System.out.println(total);
	}
}
