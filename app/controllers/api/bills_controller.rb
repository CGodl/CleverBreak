class Api::BillsController < ApplicationController 

  def create
    recipients = User.find_by(email: [:email])

    if Bill.last == nil
      current_history_id = 0
    else
      current_history_id = Bill.last.history_id + 1
    end

    current_user_id = current_user.id

      # @bill = Bill.new(bill_params)
      //debugger
    @bill = Bill.new({author_id: current_user.id,
                     recipient_id: bill_params[:recipient_id],
                     history_id: current_history_id,
                     group_id: bill_params[:group_id],
                     cost: bill_params[:cost],
                     description: bill_params[:description],
                     updated_at: bill_params[:updated_at]
                      })

      
      //debugger
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
    @bills = current_user.bills
  end

  def show
    bill = Bill.find(params[:id])

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