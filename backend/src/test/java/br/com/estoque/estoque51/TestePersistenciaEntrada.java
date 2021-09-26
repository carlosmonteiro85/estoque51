package br.com.estoque.estoque51;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.estoque.estoque51.model.Entrada;
import br.com.estoque.estoque51.model.Fornecedor;
import br.com.estoque.estoque51.model.Item;
import br.com.estoque.estoque51.model.enuns.CategoriaEnum;
import br.com.estoque.estoque51.service.EntradaService;
import br.com.estoque.estoque51.service.FornecedorService;

public class TestePersistenciaEntrada extends Estoque51ApplicationTests {

	@Autowired
	EntradaService entradaService;

	@Autowired
	FornecedorService fornecedorService;

	@Test
	public void salvarEntrada() {

		BigDecimal valorTotal = new BigDecimal(0);

		Fornecedor fornecedor = createFornecedorForTeste();
		fornecedorService.save(fornecedor);

		Entrada entrada = new Entrada();
		entrada.setDataEntrada(LocalDate.now());
		entrada.setDataPedido(LocalDate.now().minusWeeks(1));
		entrada.setNf("5678");

		List<Item> itens = createListItensForTest(fornecedor);
		entrada.setItens(itens);

		for (Item item : itens) {
			valorTotal.add(item.getCusto());
		}

		entrada.setValorTotal(valorTotal);

		entradaService.save(entrada);

		assertTrue(entrada.getId() != null);

	}

	public List<Item> createListItensForTest(Fornecedor fornecedor) {

		Item item1 = new Item();
		Item item2 = new Item();

		item1.setCategoria(CategoriaEnum.BEBIDA);
		item2.setCategoria(CategoriaEnum.TABACARIA);

//		toString();
//		item1.setCodigoBarras(String.valueOf(System.currentTimeMillis()+1));
//		item2.setCodigoBarras(String.valueOf(System.currentTimeMillis()+1));

		item1.setCusto(new BigDecimal(10));
		item2.setCusto(new BigDecimal(12));

		item1.setFornecedor(fornecedor);
		item2.setFornecedor(fornecedor);

		item1.setImposto(new BigDecimal(0));
		item2.setImposto(new BigDecimal(0));

		item1.setLote("001");
		item2.setLote("002");

		item1.setNome("Cerveja one");
		item2.setNome("Tabaco one");

		item1.setQuantidadeCaixa(12);
		item2.setQuantidadeCaixa(30);

		item1.setVenda(new BigDecimal(32));
		item2.setVenda(new BigDecimal(15));

		List<Item> itens = new ArrayList<>();
		itens.add(item1);
		itens.add(item2);

		return itens;
	}

	public Fornecedor createFornecedorForTeste() {
		Fornecedor fornecedor = new Fornecedor();

		fornecedor.setCnpj(String.valueOf(System.currentTimeMillis()));
		fornecedor.setEmail("fornecedor@fornecedor.com");
		fornecedor.setNome("Fornecedor One LTDA");
		fornecedor.setTelefone("333-3333");
		fornecedor.setVendedor("Vendedor");

		return fornecedor;
	}
}
