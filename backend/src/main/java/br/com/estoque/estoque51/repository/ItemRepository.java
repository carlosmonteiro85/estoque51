package br.com.estoque.estoque51.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.estoque.estoque51.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer>{
}
