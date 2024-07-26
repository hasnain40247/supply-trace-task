import unittest
from flask_testing import TestCase
from flask import json
from app import app
import pandas as pd

class TestAPI(TestCase):
    def create_app(self):
        app.config['TESTING'] = True
        return app

    def setUp(self):
        # Mock data for testing
        self.companies_data = pd.DataFrame({
            'company_id': [1, 2],
            'name': ['Company A', 'Company B'],
            'address': ['123 St, CA', '456 Ave, NY'],
            'latitude': [37.7749, 40.7128],
            'longitude': [-122.4194, -74.0060]
        })

        self.locations_data = pd.DataFrame({
            'company_id': [1, 1, 2],
            'location_id': [1, 2, 3],
            'address': ['123 Main St', '456 Elm St', '789 Oak St'],
            'latitude': [37.7749, 37.7750, 40.7128],
            'longitude': [-122.4194, -122.4195, -74.0060],
            'name': ['Location A1', 'Location A2', 'Location B1']
        })

        # Mock the read_csv function
        pd.read_csv = lambda x: self.companies_data if 'companies' in x else self.locations_data

    def test_get_companies(self):
        response = self.client.get('/api/companies')
        print("***************************************")
        print(response.data)
        print("***************************************")

        self.assert200(response)
        data = json.loads(response.data)
        self.assertEqual(len(data), 2)
        self.assertEqual(data[0]['name'], 'Company A')
        self.assertEqual(data[1]['name'], 'Company B')

    def test_get_company(self):
        response = self.client.get('/api/companies/1')
        self.assert200(response)
        data = json.loads(response.data)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Company A')

    def test_get_company_not_found(self):
        response = self.client.get('/api/companies/999')
        self.assert404(response)

    def test_get_locations(self):
        response = self.client.get('/api/companies/1/locations')
        self.assert200(response)
        data = json.loads(response.data)
        self.assertEqual(len(data), 2)
        self.assertEqual(data[0]['name'], 'Location A1')
        self.assertEqual(data[1]['name'], 'Location A2')

    def test_get_locations_not_found(self):
        response = self.client.get('/api/companies/999/locations')
        self.assert404(response)

if __name__ == '__main__':
    unittest.main()