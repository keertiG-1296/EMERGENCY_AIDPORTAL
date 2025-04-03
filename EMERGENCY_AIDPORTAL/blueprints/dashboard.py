from flask import Blueprint, jsonify

dashboard = Blueprint('dashboard', __name__)

@dashboard.route('/get_dashboard_data')
def get_dashboard_data():
    return jsonify({"message": "Dashboard data will be here"}), 200
