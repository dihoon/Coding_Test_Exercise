// 나머지
// https://www.acmicpc.net/problem/10430
import java.io.*;
import java.util.Arrays;

public class _10430 {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String[] s = br.readLine().split(" ");
		int[] arr = Arrays.stream(s).mapToInt(x->Integer.parseInt(x)).toArray();

		int[] result = new int[4];
		result[0] = ((arr[0]+arr[1])%arr[2]);
		result[1] = ((arr[0]%arr[2])+(arr[1]%arr[2]))%arr[2];
		result[2] = (arr[0]*arr[1])%arr[2];
		result[3] = ((arr[0]%arr[2])*(arr[1]%arr[2]))%arr[2];
		
		for (int i=0;i<result.length;i++) {
			System.out.println(result[i]);
		}
	}
}
