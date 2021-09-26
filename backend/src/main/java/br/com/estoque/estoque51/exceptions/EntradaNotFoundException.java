package br.com.estoque.estoque51.exceptions;

public class EntradaNotFoundException extends Exception{

	private static final long serialVersionUID = 1L;
	
	public EntradaNotFoundException(Integer id) {
        super("Nenhuma entrada com o id:  " + id);
	}

}
