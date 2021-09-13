//package br.com.estoque.estoque51.model;
//
//import java.math.BigDecimal;
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//
////@Entity
////@Table(name = "entrada")
//public class Entrada {
//
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;
//
//	@Column(name = "data_pedido")
//	private LocalDate dataPedido;
//
//	@Column(name = "data_entrada")
//	private LocalDate dataEntrada;
//
//	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
//	private List<Item> itens = new ArrayList<>();
//
//	@Column(name = "valor_total")
//	private BigDecimal valorTotal;
//
//	@Column(name = "nf")
//	private String nf;
//
//	public Integer getId() {
//		return id;
//	}
//
//	public void setId(Integer id) {
//		this.id = id;
//	}
//
//	public LocalDate getDataPedido() {
//		return dataPedido;
//	}
//
//	public void setDataPedido(LocalDate dataPedido) {
//		this.dataPedido = dataPedido;
//	}
//
//	public LocalDate getDataEntrada() {
//		return dataEntrada;
//	}
//
//	public void setDataEntrada(LocalDate dataEntrada) {
//		this.dataEntrada = dataEntrada;
//	}
//
//	public List<Item> getItens() {
//		return itens;
//	}
//
//	public void setItens(List<Item> itens) {
//		this.itens = itens;
//	}
//
//	public BigDecimal getValorTotal() {
//		return valorTotal;
//	}
//
//	public void setValorTotal(BigDecimal valorTotal) {
//		this.valorTotal = valorTotal;
//	}
//
//	public String getNf() {
//		return nf;
//	}
//
//	public void setNf(String nf) {
//		this.nf = nf;
//	}
//
//}
