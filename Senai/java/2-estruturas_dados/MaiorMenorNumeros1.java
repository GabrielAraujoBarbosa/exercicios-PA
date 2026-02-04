public class MaiorMenorNumeros1
{
	public static void main(String[] args) {
		
		int[] arrayNumeros = {10, 20, 50, 30, 15, 40, 5, 35};
		
		int menorNumero = arrayNumeros[0], maiorNumero = arrayNumeros[0];
		
		for (int numero : arrayNumeros) {
		    if (numero > maiorNumero) {
		        maiorNumero = numero;
		        continue;
		    }
		    if (numero < menorNumero) {
		        menorNumero = numero;
		    }
		    
		}
		
		System.out.println("Maior número: " + maiorNumero);
		System.out.println("Menor número: " + menorNumero);
	}
}