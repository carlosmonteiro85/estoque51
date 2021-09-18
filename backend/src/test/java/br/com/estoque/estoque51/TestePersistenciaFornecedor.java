package br.com.estoque.estoque51;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.estoque.estoque51.exceptions.FornecedorNotFoundException;
import br.com.estoque.estoque51.model.Fornecedor;
import br.com.estoque.estoque51.service.FornecedorService;

public class TestePersistenciaFornecedor extends Estoque51ApplicationTests {

	@Autowired
	FornecedorService service;

	@Test
	public void salvarFornecedor() {
		// Cenário
		Fornecedor fornecedor = createForTeste();
		// Ação
		service.save(fornecedor);
		// Verificação
		assertTrue(fornecedor.getId() != null);

	}

	@Test
	public void findByCnPJ() {
		// Cenário
		Fornecedor fornecedor = createForTeste();
		service.save(fornecedor);
		// Ação
		Fornecedor comCNPJ = service.findByCnpj(fornecedor.getCnpj());
		// Verificação
		assertTrue(fornecedor.getId() == comCNPJ.getId());

	}

	@Test
	public void testUpdate() throws FornecedorNotFoundException {

		// Cenário
		Fornecedor fornecedor = createForTeste();
		service.save(fornecedor);

		fornecedor.setNome("Nome Atualizado");
		service.updateById(fornecedor);
		// Ação
		Fornecedor fornecedorPersited = service.findById(fornecedor.getId());

		// Verificação
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
		fornecedor.setVendedor("Vendedor");
		
		return fornecedor;
	}
}
