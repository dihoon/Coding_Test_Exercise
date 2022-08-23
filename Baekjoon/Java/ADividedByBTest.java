// A/B
// https://www.acmicpc.net/problem/1008
import java.util.Scanner;

public class ADividedByBTest {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int a = input.nextInt();
		int b = input.nextInt();
		
		System.out.println(a/(double)b);
		
		input.close();
	}
}