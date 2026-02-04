public class TiposIniciais
{
	public static void main(String[] args) {
		
		// 1º - ENTRADAS
		
		// (Pode-se usar números inteiros representados em outros sistemas númericos)
		byte menorInteiroPossivel = 0b10101;
		short pequenoInteiro = 0xff;
		int tipoInteiroPadrao = 100;
		// L obrigatório
		long maiorInteiroPossivel = 9_223_372_036_854_775_807L;
		
		// F obrigatório
		float pontoFlutuanteMenor = 123.4F;
		// D opcional 
		double pontoFlutuanteMaior = 1.234e2D;
		
		// Aspas simples ''
		char caractere = '\u0067';
		// Aspas duplas ""
		String texto = "gabriel";
		
		// 2 tipos de valores
		boolean booleano_binario = true;
		
		// 2º - SAÍDAS
		System.out.println(menorInteiroPossivel);
		System.out.println(pequenoInteiro);
		System.out.println(tipoInteiroPadrao);
		System.out.println(maiorInteiroPossivel);
		
		System.out.println();
		
		System.out.println(pontoFlutuanteMenor);
		System.out.println(pontoFlutuanteMaior);
		
		System.out.println();
		
		System.out.println(caractere);
		System.out.println(texto);
		
		System.out.println();
		
		System.out.println(booleano_binario);
	}
}