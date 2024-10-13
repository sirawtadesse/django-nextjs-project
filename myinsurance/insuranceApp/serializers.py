# from rest_framework import serializers
# from .models import insuranceAppProposal

# class insuranceAppProposalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = insuranceAppProposal
#         fields = '__all__'

from rest_framework import serializers
from .models import insuranceAppProposal, Claim


class insuranceAppProposalSerializer(serializers.ModelSerializer):
    class Meta:
        model = insuranceAppProposal
        fields = '__all__'  # Or specify the fields you want to serialize

class ClaimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claim
        fields = '__all__'