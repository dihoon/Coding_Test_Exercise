// 1998년생인 내가 태국에서는 2541년생?!
// https://www.acmicpc.net/problem/18108
import java.io.*;

public class _18108 {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String y = br.readLine();
		
		int result = Integer.parseInt(y) - 543;
		
		System.out.println(result);
		
		br.close();
	}
}
