public class MaiorMenorNumeros2
{
	public static void main(String[] args) {
		
		int[] arrayNumeros = {10, 20, 50, 30, 15, 40, 5, 35};
		
		int menorNumero = arrayNumeros[0], maiorNumero = arrayNumeros[0];
		
		for (int index = 1; index < arrayNumeros.length; index++) {
		    if (arrayNumeros[index] > maiorNumero) {
		        maiorNumero = arrayNumeros[index];
		        continue;
		    }
		    if (arrayNumeros[index] < menorNumero) {
		        menorNumero = arrayNumeros[index];
		    }
		    
		}
		
		System.out.println("Maior número: " + maiorNumero);
		System.out.println("Menor número: " + menorNumero);
	}
}