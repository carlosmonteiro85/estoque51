package br.com.estoque.estoque51.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import br.com.estoque.estoque51.model.enuns.CategoriaEnum;

@Entity
@Table(name = "Itens")
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "descricao")
	private String descricao;
	
	@OneToOne
	private Fornecedor fornecedor;
	
	@Enumerated(EnumType.ORDINAL)
	private CategoriaEnum categoria;
	
	@Column(name = "quantidade_unidade_caixa")
	private Integer quantidadeCaixa;
	
	@Column(name = "lote")
	private String lote;
	
	@Column(name = "codigo_barras", unique = true)
	private String codigoBarras;

	@Column(name = "valor_custo")
	private BigDecimal custo;

	@Column(name = "valor_venda")
	private BigDecimal venda;

	@Column(name = "imposto")
	private BigDecimal imposto;

	
	@OneToOne
	private Entrada entrada;

	public String getNome() {
		return descricao;
	}

	public void setNome(String nome) {
		this.descricao = nome;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	public CategoriaEnum getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriaEnum categoria) {
		this.categoria = categoria;
	}

	public String getLote() {
		return lote;
	}

	public void setLote(String lote) {
		this.lote = lote;
	}

	public Integer getQuantidadeCaixa() {
		return quantidadeCaixa;
	}

	public void setQuantidadeCaixa(Integer quantidadeCaixa) {
		this.quantidadeCaixa = quantidadeCaixa;
	}

	public BigDecimal getCusto() {
		return custo;
	}

	public void setCusto(BigDecimal custo) {
		this.custo = custo;
	}

	public BigDecimal getVenda() {
		return venda;
	}

	public void setVenda(BigDecimal venda) {
		this.venda = venda;
	}

	public BigDecimal getImposto() {
		return imposto;
	}

	public void setImposto(BigDecimal imposto) {
		this.imposto = imposto;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCodigoBarras() {
		return codigoBarras;
	}

	public void setCodigoBarras(String codigoBarras) {
		this.codigoBarras = codigoBarras;
	}

	public Entrada getEntrada() {
		return entrada;
	}

	public void setEntrada(Entrada entrada) {
		this.entrada = entrada;
	}

}
