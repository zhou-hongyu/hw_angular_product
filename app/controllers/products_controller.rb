class ProductsController < ApplicationController
  # GET /articles.json
  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def create
    # Create and save new product from data received from the client
    new_product = Product.new
    new_product.name = params[:new_product][:name]
    new_product.price = params[:new_product][:price]
    new_product.description = params[:new_product][:description]

    # Confirm product is valid and save or return HTTP error
    if new_product.valid?
      new_product.save!
    else
      render "public/422", :status => 422
      return
    end

    # Respond with newly created product in json format
    respond_with(new_product) do |format|
      format.json { render :json => new_product.as_json }
    end
  end
end
