package br.com.estoque.estoque51.exceptions;

public class FornecedorNotFoundException extends Exception{

	private static final long serialVersionUID = 1L;
	
	public FornecedorNotFoundException(Integer id) {
        super("Nenhum fornecedor encontrado com o id:  " + id);
	}

}
