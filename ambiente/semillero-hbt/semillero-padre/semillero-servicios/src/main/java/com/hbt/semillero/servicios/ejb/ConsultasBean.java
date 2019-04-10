package com.hbt.semillero.servicios.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.hbt.semillero.entidades.Linea;
import com.hbt.semillero.entidades.Marca;

@Stateless
public class ConsultasBean {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
	public List<Marca> consultarMacas() {
		return entityManager.createQuery("Select ma FROM Marca ma").getResultList();
		
	}
	
	public List<Linea> consultarLinea(Long idmarca) {
		return entityManager.createQuery("Select ln FROM Linea ln where ln.marca.idLinea =: ID_LINEA").setParameter("ID_LINEA", idmarca).getResultList();
	}
}
