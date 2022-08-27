// 킹, 퀸, 룩, 비숍, 나이트, 폰
// https://www.acmicpc.net/problem/3003
import java.io.*;

public class _3003 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int[] arr = {1,1,2,2,2,8};
		String[] str = br.readLine().split(" ");
		
		for (int i=0;i<str.length;i++) {
			str[i] = Integer.toString(arr[i]-Integer.parseInt(str[i]));
		}
		System.out.println(String.join(" ", str));
		
		br.close();
	}
}