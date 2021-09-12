package br.com.estoque.estoque51.model;

import java.util.ArrayList;
import java.util.List;

public class Fornecedor {
	
	private Integer id;
	private String nome;
	private String cnpj;
	private String telefone;
	private String email;
	private List<String> vendedores = new ArrayList<>();
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<String> getVendedores() {
		return vendedores;
	}
	public void setVendedores(List<String> vendedores) {
		this.vendedores = vendedores;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

}
