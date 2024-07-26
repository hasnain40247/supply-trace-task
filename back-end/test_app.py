import unittest
from flask_testing import TestCase
from app import app
from app import  companies,locations 
'''
TestAPI class is used to test the Flask API endpoints defined in the app.
It uses the flask_testing.TestCase to create an app context for testing.
 
'''
class TestAPI(TestCase):
    def create_app(self):
        """
        Configure the Flask app for testing.
        This method is called by the TestCase framework to create the app context.
        
        Returns:
            app (Flask): The Flask app configured for testing.
        """
        app.config['TESTING'] = True
        return app
    def test_get_companies(self):
        """
        Test the /api/companies endpoint.
        It verifies that the endpoint returns a 200 status code and a list of companies.
        If there are companies in the dataset, the response list should not be empty.
        """
        response = self.client.get('/api/companies')
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json, list)
        if companies.shape[0] > 0:
            self.assertGreater(len(response.json), 0)
        
    def test_get_company(self):
        """
        Test the /api/companies/<company_id> endpoint with a valid company ID.
        It verifies that the endpoint returns a 200 status code and the company details as a list.
        If the company with ID 1 does not exist, it should return a 500 status code.
        """
        response = self.client.get('/api/companies/1')
        if companies[companies['company_id'] == 1].empty:
            self.assertEqual(response.status_code, 500)
        else:
            self.assertEqual(response.status_code, 200)
            self.assertIsInstance(response.json, list)
            self.assertGreater(len(response.json), 0)

    def test_get_company_not_found(self):
        """
        Test the /api/companies/<company_id> endpoint with an invalid company ID.
        It verifies that the endpoint returns a 500 status code and an 'Internal Server Error' message.
        """
        response = self.client.get('/api/companies/9999')  
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.json['error'], 'Internal Server Error')
        
    def test_get_locations(self):
        """
        Test the /api/companies/<company_id>/locations endpoint with a valid company ID.
        It verifies that the endpoint returns a 200 status code and a list of locations.
        If the company with ID 1 does not have any locations, it should return a 500 status code.
        """
        response = self.client.get('/api/companies/1/locations')
        if locations[locations['company_id'] == 1].empty:
            self.assertEqual(response.status_code, 500)
        else:
            self.assertEqual(response.status_code, 200)
            self.assertIsInstance(response.json, list)
            self.assertGreater(len(response.json), 0)

    def test_get_locations_not_found(self):
        """
        Test the /api/companies/<company_id>/locations endpoint with an invalid company ID.
        It verifies that the endpoint returns a 500 status code and an 'Internal Server Error' message.
        """
        response = self.client.get('/api/companies/9999/locations')  
        self.assertEqual(response.status_code, 500)
        self.assertEqual(response.json['error'], 'Internal Server Error')
    

if __name__ == '__main__':
    unittest.main()