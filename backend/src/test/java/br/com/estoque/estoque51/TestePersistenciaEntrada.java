//package br.com.estoque.estoque51;
//
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//import java.math.BigDecimal;
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import br.com.estoque.estoque51.model.Entrada;
//import br.com.estoque.estoque51.model.Fornecedor;
//import br.com.estoque.estoque51.model.Item;
//import br.com.estoque.estoque51.model.enuns.CategoriaEnum;
//
//public class TestePersistenciaEntrada extends Estoque51ApplicationTests {
//
////	@Autowired
////	EntradaService service;
////
////	@Test
////	public void salvarEntrada() {
////
////		Entrada entrada = new Entrada();
////
////		entrada.setItens(createListItens());
////		entrada.setDataEntrada(LocalDate.now());
////		entrada.setDataPedido(LocalDate.now().minusWeeks(1));
////		entrada.setNf("5678");
////
////		entrada.setValorTotal(new BigDecimal(210));
////
////		service.save(entrada);
////
////		assertTrue(entrada.getId() != null);
////
////	}
////
////	public List<Item> createListItens() {
////
////		Fornecedor fornecedor = new Fornecedor();
////		fornecedor.setCnpj("000.000.0001-00");
////		fornecedor.setEmail("asdf@asdf");
////		fornecedor.setNome("Fornecedor01");
////		fornecedor.setTelefone("61 9595-6565");
////
////		List<String> vendedores = new ArrayList<>();
////		vendedores.add("vendedor");
////		fornecedor.setVendedores(vendedores);
////
////		Item item1 = new Item();
////		Item item2 = new Item();
////
////		item1.setCategoria(CategoriaEnum.BEBIDA);
////		item2.setCategoria(CategoriaEnum.TABACARIA);
////
////		item1.setCodigoBarras(123456789);
////		item2.setCodigoBarras(1234567810);
////
////		item1.setCusto(new BigDecimal(10));
////		item2.setCusto(new BigDecimal(12));
////
////		item1.setFornecedor(fornecedor);
////		item2.setFornecedor(fornecedor);
////
////		item1.setImposto(new BigDecimal(0));
////		item2.setImposto(new BigDecimal(0));
////
////		item1.setLote("001");
////		item2.setLote("040");
////
////		item1.setNome("Cerveja one");
////		item2.setNome("Tabaco one");
////
////		item1.setQuantidadeCaixa(12);
////		item2.setQuantidadeCaixa(30);
////
////		item1.setVenda(new BigDecimal(32));
////		item2.setVenda(new BigDecimal(15));
////
////		List<Item> itens = new ArrayList<>();
////		itens.add(item1);
////		itens.add(item2);
////
////		return itens;
////
////	}
//}
