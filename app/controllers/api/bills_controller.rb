class BillsController < ApplicationController 

  def create
    if Bill.last.history_id == nil
      last_history_id = 0
    else
      last_history_id = Bill.last.history_id
    end

    
    receipients = User.find_by(email: [:email])
    @bill = Bill.new(bill_params)
                      
                      
              





  end



  def destroy

  end

  def index
    @bills = current_user.bills

  end


  private

  def bill_params
    params.require(:bills).permit(:author_id, :history_id, :group_id, :cost, :description, :updated_at)
  end

end