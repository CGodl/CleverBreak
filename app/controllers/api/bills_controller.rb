class Api::BillsController < ApplicationController 

  def create
    receipients = User.find_by(email: [:email])
    # billed_user = User.find_by(email: [:email])
    ##### ADD STRONG PARAMS #####

    authors_ident = current_user.id


    
    bill = Bill.new({
        author_id: bill_params[authors_ident],
        history_id: bill_params[:history_id],
        group_id: bill_params[:group_id],
        description: bill_params[:description],
        cost: bill_params[:cost],
        updated_at: bill_params[:updated_at]
    })

      if bill.save 
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
    if bill
      render :show
    else
      render json: ["Unable to find user"]
    end
  end


  private

  def bill_params
    params.require(:bills).permit(:author_id, :history_id, :group_id, :cost, :description, :updated_at)
  end
end