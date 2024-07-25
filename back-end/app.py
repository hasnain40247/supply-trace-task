from flask import Flask, jsonify, abort
from flasgger import Swagger
import pandas as pd
import logging

app = Flask(__name__)
swagger = Swagger(app)

# Logger set-up with FileHandler and level set to INFO.
logging.basicConfig(filename='record.log', level=logging.INFO)

# Variables assigned during server initialization to reduce redundant calls
companies = pd.read_csv("./assets/companies.csv")
locations = pd.read_csv("./assets/locations.csv")

@app.route('/api/companies', methods=['GET'])
def get_companies():
    """
    Fetches all companies within a file.
    ---
    responses:
        200:
            description: A list of companies, with their ids, names and other details.
            schema:
                type: array
                items:
                    type: object
                    properties:
                        company_id:
                            type: integer
                            example: 1
                        name:
                            type: string
                            example: "Company A"
                        address:
                            type: string
                            example: "123 St, CA"
                        latitude:
                            type: float
                            example: 123.23
                        longitude:
                            type: float
                            example: 13.23
        500:
            description: Internal Server Error.
    """
    app.logger.info('Fetching all companies')
    try:
        companies_data = companies.to_dict(orient='records')
        return jsonify(companies_data)
    except Exception as e:
        app.logger.error(f'Error fetching companies: {str(e)}')
        abort(500, description="Internal Server Error")

@app.route('/api/companies/<int:company_id>', methods=['GET'])
def get_company(company_id):
    """
    Fetch a single company's details by ID.
    ---
    parameters:
        - name: company_id
          in: path
          type: integer
          required: true
          description: The ID of the required company
    responses:
        200:
            description: A single company queried by the ID.
            schema:
                    type: object
                    properties:
                        company_id:
                            type: integer
                            example: 1
                        name:
                            type: string
                            example: "Company A"
                        address:
                            type: string
                            example: "123 St, CA"
                        latitude:
                            type: float
                            example: 123.23
                        longitude:
                            type: float
                            example: 13.23
        404:
            description: Company not found - either invalid column or missing entry.
        500:
            description: Internal Server Error
    """
    app.logger.info(f'Fetching company with id: {company_id}')
    try:
        company = companies[companies['company_id'] == company_id].to_dict(orient='records')
        if not company:
            app.logger.warning(f'Company with id {company_id} not found')
            abort(404, description="Company not found")
        return jsonify(company)
    except Exception as e:
        app.logger.error(f'Error fetching company with id {company_id}: {str(e)}')
        abort(500, description="Internal Server Error")

@app.route('/api/companies/<int:company_id>/locations', methods=['GET'])
def get_locations(company_id):
    """
    Fetch all possible locations for a specific company.
    ---
    parameters:
        - name: company_id
          in: path
          type: integer
          required: true
          description: The ID of the company
    responses:
        200:
            description: A list of available locations for the company queried by the ID.
            schema:
                type: array
                items:
                    type: object
                    properties:
                        company_id:
                            type: integer
                            example: 1
                        location_id:
                            type: integer
                            example: 1
                        address:
                            type: string
                            example: "123 Main St"
                        latitude:
                            type: float
                            example: 12.32
                        longitude:
                            type: float
                            example: 100.23
                        name:
                            type: string
                            example: "Company A"
        404:
            description: No locations found for this company - either invalid column name or missing ID.
        500:
            description: Internal Server Error
    """
    app.logger.info(f'Fetching locations for company with id {company_id}')
    try:
        locations_data = locations[locations['company_id'] == company_id].to_dict(orient='records')
        if not locations_data:
            app.logger.warning(f'No locations found for company with id {company_id}')
            abort(404, description="No locations found for this company")
        return jsonify(locations_data)
    except Exception as e:
        app.logger.error(f'Error fetching locations for company with id {company_id}: {str(e)}')
        abort(500, description="Internal Server Error")



# Error Handling - mainly logging and sending out error object.
@app.errorhandler(404)
def not_found(error):
    app.logger.error(f'404 error: {error.description}')
    return jsonify({'error': 'Not found', 'message': error.description}), 404

@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f'500 error: {error.description}')
    return jsonify({'error': 'Internal Server Error', 'message': error.description}), 500


