package br.com.estoque.estoque51.model.enuns;

public enum CategoriaEnum {
	
	BEBIDA(0, "Bebida"), DOCE(1, "Doce"), APERITIVO(2, "Aperitivo"), TABACARIA(3, "Tabacaria");

	private Integer codigo;
	private String nome;

	private CategoriaEnum(Integer codigo, String nome) {
		this.codigo = codigo;
		this.nome = nome;
	}

	public Integer getCodigo() {
		return codigo;
	}
	
	public String getNome() {
		return nome;
	}
	

}
