package co.com.prueba.choucair.utils;


import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.codoid.products.fillo.Connection;
import com.codoid.products.fillo.Fillo;
import com.codoid.products.fillo.Recordset;

public class FilloConnection {

	private static Connection connection;
	private static Recordset recordset;

	private FilloConnection() {
	}

	public static List<String> data(String scenarioNumber, String sheetName) {
		System.setProperty("ROW", scenarioNumber);
		Fillo fillo = new Fillo();
		try {
			connection = fillo.getConnection("src/test/resources/co/com/prueba/choucair/files/Dataphptravels.xlsx");
			String strQuery = "Select * from " + sheetName;
			recordset = connection.executeQuery(strQuery);
			return recordset.getFieldNames();
		} catch (Exception e) {
			Logger.getLogger("Exception").log(Level.WARNING,
					"\n**********\n \n " + e.getMessage() + " \n \n**********");
		}
		return Collections.emptyList();
	}

	public static void closeConnection() {
		recordset.close();
		connection.close();
	}

}
