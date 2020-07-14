class Api::BillsController < ApplicationController 

  def create
      @bill = Bill.new(bill_params)

    if @bill.save!
        render :show
    
    else
      render json: ["Could not create bill"]
    end
  end





  def destroy
    @bill = Bill.find_by(bill: [:id]) 

    if @bill
      @bill.destroy
    else
      render json: ['bill could not be found']
    end

  end

  def index
    # @bills = current_user.bills
    # //debugger
    @bills = Bill.all
    render :index
    # //debugger
  end

  def show
    bill = Bill.find(params[:id])
    debugger
    if bill
      render :show
    else
      render json: ["Unable to find bill"]
    end


  end


  private

  def bill_params
    params.require(:bills).permit(:author_id, :history_id, :recipient_id, :group_id, :cost, :description, :updated_at)
  end

end