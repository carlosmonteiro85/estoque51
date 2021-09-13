package br.com.estoque.estoque51;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Currency;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.estoque.estoque51.model.Fornecedor;
import br.com.estoque.estoque51.model.Vendedor;
import br.com.estoque.estoque51.service.FornecedorService;

public class TestePersistenciaFornecedor extends Estoque51ApplicationTests {

	@Autowired
	FornecedorService service;

	@Test
	public void salvarFornecedor() {

		Fornecedor fornecedor = createForTeste();

		service.save(fornecedor);

		assertTrue(fornecedor.getId() != null);

	}

	@Test
	public void testUpdate() {

		// Cenário
		Fornecedor fornecedor = createForTeste();
		service.save(fornecedor);

		// Verificação
		fornecedor.setNome("Nome Atualizado");
		service.save(fornecedor);

		Fornecedor fornecedorPersited = service.loadById(fornecedor.getId());

		assertEquals(fornecedor.getNome(), fornecedorPersited.getNome());

	}

	@Test
	public void testFindAll() {

		// Cenário
		Fornecedor fornecedor = createForTeste();
		service.save(fornecedor);

		// Ação
		List<Fornecedor> fornecedores = service.findAll();

		// Verificação
		assertTrue(fornecedores.size() > 0);

	}

	public Fornecedor createForTeste() {
		Fornecedor fornecedor = new Fornecedor();
		
		

		fornecedor.setCnpj(String.valueOf(System.currentTimeMillis()));
		fornecedor.setEmail("fornecedor@fornecedor.com");
		fornecedor.setNome("Fornecedor One LTDA");
		fornecedor.setTelefone("333-3333");

		List<Vendedor> vendedores = fornecedor.getVendedores();

		Vendedor vendedor = new Vendedor();
		vendedor.setNome("Vendedor 1");
		vendedores.add(vendedor);

		fornecedor.setVendedores(vendedores);

		return fornecedor;
	}
}
